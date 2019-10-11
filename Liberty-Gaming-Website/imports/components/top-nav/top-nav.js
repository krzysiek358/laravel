import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './top-nav.html';

class TopNav
{
    constructor(){}
}

export default angular.module('topNav', [angularMeteor])
    .component('topNav', { templateUrl: 'imports/components/top-nav/top-nav.html', controller: TopNav});