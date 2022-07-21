// Code to be uploaded on the ESP32
#include <Arduino.h>
#include <DNSServer.h>

#ifdef ESP32
#include <WiFi.h>

#elif defined(ESP32)
#include <ESP32WiFi.h>
#include <ESPAsyncTCP.h>
#endif

/*
 TODO:
 Start web Server 
 Initialize camera connections 
 
*/

// Ensure the pins are PWM capable

int pir_signal = 13;
int trigger = 19;
int echo = 5;

int distance;
int def;

void setup() {

  pinMode(pir_signal,OUTPUT);
  pinMode(trigger,OUTPUT);
  pinMode(echo,INPUT);
    
}

void loop() {
  
       
}

bool detectMotion(){
  int state = digitalRead(pir_signal);
    
  if(state == 1){
     // Motion detected 
      return true;     
  }else{
    return false;
  }
}

int readDistance(){
  int duration = pulseIn(echo,HIGH);
  distance = duration*0.034 /2;
  return distance;
}
