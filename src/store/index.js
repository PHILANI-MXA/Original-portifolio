import { createStore } from 'vuex';

export default createStore({
  state: {
 projects : [
	{
		Projectname: 'To do',
		title: 'This is my javascript project where a user can add in the list an item of their choice they can also delete',
		category: 'Javascript',
     img: 'https://i.postimg.cc/QdbSN9N0/todo.png',
     github: 'https://github.com/PHILANI-MXA/TodoAppChallenge',
    live: 'https://bejewelled-sunflower-763e81.netlify.app/',
      },
   	{
		Projectname: 'Time Converter',
		title: 'This is my javascript project that allows a user to convert minutes to seconds.',
		category: 'Javascript',
     img: 'https://i.postimg.cc/WpFpc0p6/minutes-to-sec.png',
     github: 'https://github.com/PHILANI-MXA/time-converter',
    live: 'https://taupe-syrniki-941c55.netlify.app/',
      },
      	{
		Projectname: 'Property Listing',
		title: 'This is my Javascript project sales of properties',
		category: 'Javascript',
     img: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
     github: 'https://github.com/PHILANI-MXA/End-of-Mudule-Javascript',
    live: 'https://fantastic-duckanoo-062ed5.netlify.app/',
      },
        	{
		Projectname: 'Rainbow',
		title: 'Functioning calculator using Javascript',
		category: 'HTML',
     img: 'https://i.postimg.cc/xTjwSz2T/calxulator-save.png',
     github: 'https://github.com/PHILANI-MXA/Calculator_js',
    live: 'https://eloquent-mooncake-63cc2b.netlify.app',
      },
          	{
		Projectname: 'Rainbow',
		title: 'This is my rainbow project I have used CSS in this project',
		category: 'HTML',
     img: 'https://i.postimg.cc/nVWQT565/rainbow-activity.png',
     github: '',
    live: '',
      },
            	{
		Projectname: 'Temp Converter',
		title: 'Tempereture converter',
		category: 'Javascript',
     img: 'https://i.postimg.cc/SR1zRMtb/convertertem.png',
     github: 'https://github.com/PHILANI-MXA/Temperature_conv',
    live: 'https://fancy-haupia-0fbf37.netlify.app',
	},
],

    certificates: [
      {
        img: 'https://www.sololearn.com/certificates/course/en/25458195/1172/landscape/png',
        language: 'Python for beginners',
        Institution: 'Sololearn',
      },
        {
        img: 'https://www.sololearn.com/Certificate/1014-25458195/jpg',
        language: 'HTML',
        Institution: 'Sololearn ',
      },
          {
        img: 'https://www.sololearn.com/Certificate/1023-25458195/jpg',
        language: 'CSS',
        Institution: 'Sololearn ',
      },
            {
        img: 'https://www.sololearn.com/certificates/course/en/25458195/1068/landscape/png',
        language: 'Java',
        Institution: 'Sololearn',
      },
              {
        img: 'https://www.sololearn.com/certificates/course/en/25458195/1024/landscape/png',
        language: 'Javascript',
        Institution: 'Sololearn',
      },
                {
        img: 'https://www.sololearn.com/certificates/course/en/25458195/1060/landscape/png',
        language: 'SQL',
        Institution: 'Sololearn',
      },
                  {
        img: 'https://www.sololearn.com/Certificate/1097-25458195/jpg',
        language: 'React+Redux',
        Institution: 'Sololearn',
      },
                    {
        img: 'https://www.sololearn.com/Certificate/1162-25458195/jpg',
        language: 'Responsive Web',
        Institution: 'Sololearn',
      },
                      {
        img: 'https://www.sololearn.com/certificates/course/en/25458195/1158/landscape/png',
        language: 'Intermediate Python',
        Institution: 'Sololearn',
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
