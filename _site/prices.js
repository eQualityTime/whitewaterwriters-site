

// valies
single_camp_cost=799
staff_day_cost=120 //per day 
single_copy_cost=8
nonlocal=200 // per staff member per day


function stub(){
return 4;
}


function generatePrice() {
  var local = !document.getElementById("localno").checked;  
  console.log("local checkbox")
  console.log(local)
  var summer = document.getElementById("summeryes").checked;  
  console.log("summer checkbox")
  console.log(summer)
  camps=parseInt(document.getElementById("camps").value);
  copies_per_camp=parseInt(document.getElementById("copies").value);
  summer=
  document.getElementById("result").innerHTML=pricetext(camps,copies_per_camp,local, summer);
  local=document.getElementById("local").value;
}

function staff_days(camps){
  if (Number.isInteger(camps)){
    return camps+Math.ceil(camps/2)*4;
  } else {
    return -1;
  } 
}

function staff_cost(camps,local){
  if(local){
    console.log("hello");
    console.log(camps)
    console.log(local)
    return staff_days(camps)*staff_day_cost;
  }else {
    return staff_days(camps)*(staff_day_cost+nonlocal)
  }
}


function total_price(camps, copies, local, summer){
  summer_cost=0;
  if (summer){
    summer_cost=300;
  } 
  return staff_cost(camps,local)+(camps*single_camp_cost)+(copies*single_copy_cost)+summer_cost;
}

function pricetext(camps,copies_per_camp, local, summer) {

var num_word = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var novel_num_word = ['zero novels','one novel','two novels','three novels','four novels', 'five novels','six novels','seven novels','eight novels','nine'];
var staff_num_word = ['zero members of staff','one member of staff','two members of staff','three members of staff','four members of staff', 'five members of staff','six members of staff','seven members of staff','eight members of staff','nine'];
output = `<p>You are interested in working with ${camps*10} students, who will work in groups of ten and produce ${novel_num_word[camps]}. The cost breaks down as follows:</p><ul>`;


output += `<li>The project will need ${staff_num_word[camps]} on the first day and ${staff_num_word[Math.ceil(camps/2)]} for the remainder of the week (in large camps, one member of staff can supervise two groups for part of the process).  That's a total of ${staff_days(camps)} staff days.`

if (local){
output+= "<li>The camp is local to us, so there are no additional transport costs."
}
else {
output+= "<li>Because the your location is some distance away, will will have to add overnight accomodation and meals for the staff at £200 a night"
}

if (summer){
output+= "<li>June and July are very busy months for us and we have introduced a £300 summer surcharge to encourage booking camps in other parts of the calendar (evening out the camps means we can employ more experienced staff for longer, which is good for everybody). "
}


output+= `<li>The total staff cost is £${staff_cost(camps,local)}.`;
output+= `<li>${copies_per_camp} books at £${single_copy_cost} each is £${copies_per_camp*single_copy_cost}.`;
output+= `<li>Cover design, typesetting, core costs, server fees, software maintenance, ect come to £${single_camp_cost}.` 
output+= `<li>The total cost would therefore be: £${total_price(camps,copies_per_camp,local, summer)}.`;

return output;

  total_camp_costs=single_camp_cost*camps;
  total_cost=total_camp_costs+total_printing_costs;
//  document.getElementById("result").innerHTML="£"+total_cost;
}
//todo the div is going to have to include the breakdown 'x for staff, y for business, 
