var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var router = express.Router();
//
var coll_conversations = require('../models/conversation');

router.get('/', function (req, res, next) {
    res.render('reports/index', {title: 'Reports', conv: 2});
});

router.post('/data', function (req, res, next) {
    var dates = {};
    var durations = {};
    var users = {};
    var schedules = [];
    var users_data = {};
    // Request Filters
    var start = moment(req.body.ini);
    // var start = moment(req.body.ini).format('Y-MM-DD');
    var end = moment(req.body.fin);
    var callcenters = req.body.cc;
    var campaigns = req.body.cp;
    var diff = end.diff(start, 'days');
    if (diff <= 0)
        res.send({
            'success': false,
            'msg': 'Start date cannot be ahead to end date'
        });
    else {
        // Set range of dates selected
        var init = start.format('Y-MM-DD');
        var ending = moment(end).add(1, 'd').format('Y-MM-DD');
        while (init != ending) {
            dates[init] = 0;
            init = moment(init).add(1, 'd').format('Y-MM-DD');
        }
        // Set Static Schedules
        for (var c = 0; c <= 6; c++) {
            schedules[c] = 0;
        }
        //
        var conversations = [];
        coll_conversations.find({"stardate_conversations": {$gte: start, $lt: end}, "id_campaigns": {$in: campaigns}, "id_callcenters": {$in: callcenters}}, null, {limit: 25},
            function (err, result) {
                if (err) {
                    var request = {
                        'success': false,
                        'msg': err.message
                    };
                    res.send(request);
                } else {
                    // Looping to extract and compact data
                    result.forEach(function (el) {
                        // Callings by day
                        var sdate = moment(el.stardate_conversations).format('Y-MM-DD');
                        if (!isNaN(dates[sdate])) {
                            dates[sdate] = dates[sdate] + 1;
                        }
                        // Duration of Callings
                        var stdate = moment(el.stardate_conversations);
                        var endate = moment(el.enddate_conversations);
                        var duration = endate.diff(stdate, 'minutes');
                        if (durations[duration] == undefined) {
                            durations[duration] = 1;
                        } else {
                            durations[duration]++;
                        }
                        // Callings schedules times
                        var callingTime = moment(Date.parse(el.stardate_conversations)).utc().format('H');
                        if (callingTime < 8) //*-8AM
                            schedules[0]++;
                        else if (callingTime >= 8 && callingTime < 10) //8-10AM
                            schedules[1]++;
                        else if (callingTime >= 10 && callingTime < 12) //10-12AM
                            schedules[2]++;
                        else if (callingTime >= 12 && callingTime < 14) //12-2PM
                            schedules[3]++;
                        else if (callingTime >= 14 && callingTime < 16) //2-4PM
                            schedules[4]++;
                        else if (callingTime >= 16 && callingTime < 18) //4-6PM
                            schedules[5]++;
                        else if (callingTime >= 18) //6PM-*
                            schedules[6]++;
                        // Callings by users
                        var agent = el.ipagents_conversations;
                        if (users[agent] == undefined) {
                            users[agent] = 1;
                        } else {
                            users[agent]++;
                        }
                        //-- General Table by users
                        if (users_data[agent] == undefined) {
                            users_data[agent] = {
                                total_calls: 1,
                                total_minutes: duration
                            };
                        } else {
                            users_data[agent]['total_calls']++;
                            users_data[agent]['total_minutes'] += duration;
                        }
                        // conversations.push(el);
                    });

                    //-- Average for general Table of users
                    var count_users = 0, count_calls = 0, count_mins = 0;
                    var days_len = Object.keys(dates).length;
                    for (var idx in users_data) {
                        count_users++;
                        count_calls += users_data[idx]['total_calls'];
                        count_mins += users_data[idx]['total_minutes'];
                        users_data[idx]['days'] = days_len;
                        users_data[idx]['avg_calls'] = (users_data[idx]['total_calls'] / days_len).toFixed(2);
                        users_data[idx]['avg_minutes'] = (users_data[idx]['total_minutes'] / users_data[idx]['total_calls']).toFixed(2);
                    }
                    var count_avg_calls = (count_calls / days_len).toFixed(2);
                    var count_avg_mins = (count_mins / count_calls).toFixed(2);
                    users_data['Total: ' + count_users] = {
                        total_calls: count_calls,
                        total_minutes: count_mins,
                        avg_calls: count_avg_calls,
                        avg_minutes: count_avg_mins,
                        is_total: true
                    };
                    // res.set('Content-Type', 'text/json');
                    // res.type('json');
                    // res.status(200);
                    res.send({
                        'success': true,
                        'msg': 'Reports generated successfully',
                        data: {
                            total: dates,
                            duration: durations,
                            schedules: schedules,
                            users: users,
                            users_table: users_data
                        }
                    });
                }
            });
    }
});

module.exports = router;
