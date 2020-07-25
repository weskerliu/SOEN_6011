var Skill = require("../src/models/skill.model.js");
var assert = require('assert');
describe('Skill', function() {
    describe('get all skills', function() {
        it('should return -1 when the value is not present', function() {
            Skill.findAll(function(err,data) {
                assert.equal(data.length, 4);
            }, function(err) {
                
            })
        });
    });
    describe('add skills', function() {
            it('should return -1 when the value is not present', function() {
                Skill.findAll(function(err,data) {
                    assert.equal(data.length, 4);
                }, function(err) {
                    
                })
            });
        });
});