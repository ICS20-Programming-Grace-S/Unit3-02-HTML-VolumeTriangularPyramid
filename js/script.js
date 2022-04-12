// Created by: Grace S
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area and perimeter of the rectangle.
 */
function calcVolume () {
  // get user input
  let sideA = parseFloat(document.getElementById("side-a").value)
	let sideB = parseFloat(document.getElementById("side-b").value)
	let height = parseFloat(document.getElementById("height").value)


  // calculate the volume
  let volume = (1/6) * sideA * sideB * height

  // display the results
  document.getElementById("volume").innerHTML = "The volume is " + volume.toFixed(2) + "cm<sup>3</sup>"
}