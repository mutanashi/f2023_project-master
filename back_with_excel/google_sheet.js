




var google_sheet_id = '1uNjC_D2e2RpehQu_ad3Z3hzsEb4H4EbZ43Rwr6CNKCs';
var sheet_name = 'Sheet1';
var api = 'AIzaSyBUQZ9kkpisxu1lOYNGd8Ed6vDidg-nB68';

var goal = 'https://sheets.googleapis.com/v4/spreadsheets/'+google_sheet_id+"/values/"+sheet_name+"?alt=json&key="+api;

fetch(goal).then(res => res.json()).then(res => {
    console.log(res);
    })