import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './topNav.html';

class TopNav
{
    constructor(){}
}

export default angular.module('topNav', [angularMeteor])
    .component('topNav', { templateUrl: 'imports/components/top-nav/topNav.html', controller: TopNav});