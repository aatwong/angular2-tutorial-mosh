System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.upvoted = false;
                    this.downvoted = false;
                    this.voteCount = 0;
                    this.myVote = 0;
                }
                //@Output vote = new EventEmitter();
                VoterComponent.prototype.onClickUp = function () {
                    if (this.myVote < 1) {
                        this.myVote += 1;
                        this.voteCount += 1;
                        this.downvoted = false;
                        this.vote.emit({ myVote: this.myVote });
                        if (this.myVote > 0) {
                            this.upvoted = true;
                        }
                    }
                };
                VoterComponent.prototype.onClickDown = function () {
                    if (this.myVote > -1) {
                        this.myVote -= 1;
                        this.voteCount -= 1;
                        this.upvoted = false;
                        this.vote.emit({ myVote: this.myVote });
                        if (this.myVote < 0) {
                            this.downvoted = true;
                        }
                    }
                };
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "upvoted", void 0);
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "downvoted", void 0);
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myVote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n    <div class=\"voter\">\n        <i class=\"glyphicon glyphicon-menu-up\" \n            [class.selected]=\"upvoted\"\n            (click)=\"onClickUp()\">\n        </i>\n        <span>{{voteCount}}</span>\n        <i class=\"glyphicon glyphicon-menu-down\"\n            [class.selected]=\"downvoted\"\n            (click)=\"onClickDown()\">\n        </i>\n    </div>\n    ",
                        styles: ["\n    .voter {\n        width: 20px;\n        font-size: 22;\n        text-align: center;\n    }\n    .glyphicon {\n        color: #999;\n        cursor: pointer;\n    }\n    .selected {\n        color: black;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map