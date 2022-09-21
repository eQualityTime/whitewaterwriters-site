---
layout: default
---
<header class="portfolio-header">
  <h1>FAQ</h1>
</header>
<head> 

<script src="prices.js"></script>
</head>
<body>
<h2>White Water Writers Camp Price Estimator</h2> 
<p>This page exists so that schools can get a rough idea of how much it costs for us to run a White Water Writers Camp with you.</p> 



<fieldset id="fs-frm-inputs">
<legend>Let's work out a cost estimate</legend>



<p> <label>How many Students is the intervention for?</label>
<select name="camps" id="camps">
  <option value="1">10</option>
  <option value="2">20</option>
  <option value="3">30</option>
  <option value="4">40</option>
  <option value="5">50</option>
  <option value="6">60</option>
  <option value="7">70</option>
  <option value="8">80</option>
</select>
</p>

<label>Are you within 40 minutes drive of one of our delivery areas?</label><label for="Yes"><input type="radio" id="localyes" name="local" value="Yes" checked="checked" > Yes</label><label for="No"><input type="radio" id="localno" name="local" value="No"> No</label>


<label>How many copies of each book would you like? </label>
<select name="copies" id="copies" >
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30 (default)</option>
  <option value="40">40</option>
</select><br>

<label>Is the date you are interested in in June or July? </label><label for="Yes"><input type="radio" id="summeryes" name="summer" value="Yes"> Yes</label><label for="No"><input type="radio" id="summerno" name="summer" value="No" checked="checked" > No</label>
  


  <button onclick="generatePrice()">Calculate</button>

</fieldset>

<div id="result">

</div> 


