// Вкажіть принаймні один спосіб доступу до кожного з перелічених нижче DOM вузлів:
//
//     До DOM вузла <div>?
//     До DOM вузла <ul>?
//     До другого <li> (Петро)?


console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li')[1]);

