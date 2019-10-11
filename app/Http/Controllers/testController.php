<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
class JsonRespond
{
	public function __construct($number)
	{
		$this->client = new Client();
		$this->connect = $this->client->request('GET', 'https://swapi.co/api/people/?format=json');
		$this->Json = (string)$this->connect->getBody();
		$this->respond = json_decode($this->Json, true);
		if(is_numeric($number) && $number < 10)
			$this->respond = $this->respond['results'][$number];
	}
	
	public function ls()
	{
		return $this->respond;
	}
}

// ------------------------------------------------------------

class testController extends Controller
{
    public function index($character)
    {
		$request = new JsonRespond($character);
		dd($request->ls());
		return view('welcome');
    }
    public function all()
    {
		$request = new JsonRespond();
		dd($request->ls());
		return view('welcome');
    }
}
