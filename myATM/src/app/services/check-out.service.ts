import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CheckOutService {

  constructor(private http: HttpClient) { }
}
