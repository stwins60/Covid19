
	
getData();
async function getData() {
    const postStream = await fetch(
        'https://corona.lmao.ninja/states');
    const posts = await postStream.json();


    var out = "";

    for (i = 0; i < posts.length; i++) {
        out += '<p>States: '  + posts[i].state + '<br> Case: ' +  posts[i].cases
            + '<br> Death: ' +  posts[i].deaths + 
            '<br>Today Cases: '+ posts[i].todayCases  + 
            '<br>Today Deaths: '+ posts[i].todayDeaths + 
            '<br>Active Cases: '+ posts[i].active +'</p>';
        console.log(posts[i]);

    }

    document.getElementById('data').innerHTML = out;

}
