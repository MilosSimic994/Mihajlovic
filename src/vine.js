let vineDiv =  document.querySelectorAll('.click');
let main = document.querySelector('main')

let sorte = [
    {
        name: '8 TAMBURAŠA',
        year: '1999',
        sort: '50% Sauvignon blanc, 25% Chardonnay, 20% Pinot blanc, 5% Musc',
        descrption: `Vino predstavlja jedinstvenu kupažu raskošnog bukea sa izraženim
                    aromama breskve i dunje, obogaćenih nežnim mineralnim i citrusnim tonovima i
                    diskretnim nijansama belog livadskog cveća`,
        avatar: '/img/Wine Bottle/8tamburasa.png'
    },
    {
        name: 'ROSÉ',
        year: '1999',
        sort: '50% Merlot, 30% Cabernet franc, 20% Frankovka',
        descrption: `Vino odlikuje nežna ružičasta boja i očaravajuća
                    svežina sa prefinjenim aromama jagode i maline i nežnim tonovima
                    ružinog cveta. Prijatna slast i aromatičnost u završnici zaokružuju
                    njegovu eleganciju`,
        avatar: '/img/Wine Bottle/Rose.jpg'
    },
    {
        name: 'ŽIVOT TEČE',
        year: '1999',
        sort: '50% Merlot, 30% Cabernet franc, 20% Frankovka',
        descrption: `Na mirisu su izražene arome zrele višnje i šumskog voća koje
                    upotpunjuje diskretni dodir vanile i crne čokolade. Prefinjeno i elegantno
                    vino intenzivne rubin crvene boje, nežne teksture i prijatne, voćne završnice.`,
        avatar: '/img/Wine Bottle/Zivot Tece.jpg'
    },
    {
        name: 'SAUVIGNON BLANC',
        year: '1999',
        sort: '100% Sauvignon blanc',
        descrption: `Vino odlikuje široka paleta raskošnih aroma u kojoj dominiraju
                     note ananasa, grejpfruta i marakuje`,
        avatar: '/img/Wine Bottle/savignon blanc.png'
    }
]

console.log(sorte.name);

console.log(vineDiv);


vineDiv.forEach(element => {
    element.addEventListener('click', ()=> {
        let vino = element.innerText 
        let ispis = sorte.find(element=> {
            return vino == element.name
        })

        console.log(ispis);
        
        main.innerHTML = ''
       render(ispis)
        
        
    })
});



const render =(element)=>{
    
    main.style.background = '#fff'
    let holder = document.createElement('div')
    holder.classList.add('holder')

    let divImg = document.createElement('div')
    divImg.classList.add('vine__img')
    let img = document.createElement('img')
    img.src = element.avatar

    divImg.append(img)

    let divDesc = document.createElement('div')
    divDesc.classList.add('vine__desc')

    let title =document.createElement('h1')
    title.classList.add('vine__desc-title')
    title.innerHTML = element.name

    let year = document.createElement('h3')
    year.innerHTML = `GODINA PUNJENJA: ${element.year}`

    let sort = document.createElement('h3')
    sort.innerHTML = `SORTNI SASTAV: ${element.sort}`

    let desc = document.createElement('h3')
    desc.innerHTML = `<span>KARAKTERISTIKE:</span>   ${element.descrption}`

    divDesc.append(title,sort,year,desc)
    holder.append(divImg,divDesc)

    main.appendChild(holder)

    return main
}