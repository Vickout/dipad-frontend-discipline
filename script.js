const education = [
  {
    level: 'Pós-Graduação',
    title: 'Design de Interação para Artefatos Digitais',
    institution: 'CESAR School',
    time: 'Mai. 2020 - Em andamento'
  },
  {
    level: 'Graduação',
    title: 'Engenharia de Controle e Automação',
    institution: 'Universidade de Pernambuco',
    time: 'Abr. 2014 - Jan. 2020'
  },
  {
    level: 'Técnico',
    title: 'Automação Industrial',
    institution: 'SENAI - Areias',
    time: 'Jul. 2014 - Jan. 2018'
  }
];

const experience = [
  {
    title: 'Desenvolvedor Front-End',
    company: 'Freelancer',
    time: 'Set. 2020 - atualmente',
    description: 'Desenvolver aplicações Web e Mobile.'
  },
  {
    title: 'Participante',
    company: 'Campus Mobile',
    time: 'Jan. 2020 - Fev. 2020',
    description: `Participante na categoria Saúde da 8ª Edição do Programa
    Campus Mobile, com o Projeto LooKIDS, O olhar sobre acriança. Um aplicativo
    voltado para atenção básica de saúde, mais especificamente na saúde da
    criança, no qual a enfermeira terá a possibilidade de classificar a
    gravidade das doenças mais prevalentes na criança de forma rápida e
    precisa.`
  },
  {
    title: 'Estagiário',
    company: 'TRON Soluções Tecnológicas',
    time: 'Mar. 2018 - Dez. 2018',
    description: `Principais atividades: Treinamento, manutenção e montagem dos
    diluidores de químicos e dos dosadores de lavanderia, cozinha e torre de
    água. Além de fazer a inspeção da qualidade dos produtos que entram no
    estoque e a implementação do centro de qualidade da empresa.`
  },
];

for (i=0; i < education.length; i++) {
  educationItem =`<h3>${education[i].level}</h3>
    <div><h4>${education[i].institution}</h4> |
    <span>${education[i].time}</span></div>
    <p>${education[i].title}</p>`;
  document.getElementById("education").innerHTML += educationItem;
};

for (i=0; i < experience.length; i++) {
  experienceItem =`<h3>${experience[i].title}</h3>
    <div><h4>${experience[i].company}</h4> |
    <span>${experience[i].time}</span></div>
    <p>${experience[i].description}</p>`;
  document.getElementById("experience").innerHTML += experienceItem;
};
