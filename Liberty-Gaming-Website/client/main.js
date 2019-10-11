import angular from 'angular';
import angularMeteor from 'angular-meteor';
import topNav from '../imports/components/top-nav/topNav';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


angular.module('Liberty-Gaming', [ angularMeteor, topNav.name ]);