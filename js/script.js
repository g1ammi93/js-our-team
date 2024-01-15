const personElement = document.getElementById('person')
const cardContainerElement = document.getElementById('card-container')


const roleJob = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'Wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]

let items = '';

for (let i = 0; i < roleJob.length; i++) {
    const person = roleJob[i];
    console.log('---')
    console.log('Name: ' + person.name);
    console.log('Role: ' + person.role);
    console.log('Picture: ' + person.img);

    //     items += `<li><div><strong>Picture:</strong><img src='img/${person.img}'></img></div></li><li><div><strong>Name:</strong> ${person.name}</div></li>
    //     <li><div><strong>Role:</strong> ${person.role}</div></li>`
    // }

    items += `
            <div class="col">
                <div class="card">
                    <img src='img/${person.img}'></img>
                    <h3>${person.name}</h3>
                    <span>${person.role}</span>
                </div>
            </div>`;
}
// personElement.innerHTML = items;

cardContainerElement.innerHTML = items;