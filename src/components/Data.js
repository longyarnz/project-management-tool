import _ from 'faker';

export default [
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'Eko Atlantic',
    report: 'The proposed Eko Atlantic is a Lagos city that is being built on reclaimed waterfront and expected to accommodate at least 250,000 residents of the city on the project completion. The Eko Atlantic project extending over 9 square kilometres and is also expected to have positive effects in restoring and protecting the state shoreline. At 7km and 40 metres wide, the islands’ walkway will be the longest in the world.',
    location: 'Lagos, Nigeria',
    budget: '6000',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/eko-atlantic-city-project.jpg'
  },
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'Dredging of the River Niger',
    report: 'The dredged Lower River Niger being the largest river in Africa cuts across eight Nigerian states and passes through 152 communities. It has a length of 572 kilometres, which starts from Warri in.valueOf() Delta State to Baro in Niger State. Other states covered by the dredging include: Kogi, Anambra, Imo, Bayelsa, Rivers and Edo. The dredging of the Lower River Niger was flagged-off by the late President Umaru Musa Yar’Adua on September 10, 2009.',
    location: ' Niger-Delta Belt',
    budget: '280',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/Onitsha-port.png'
  },
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'World Trade Centre',
    report: 'The construction site sits on 6,102 hectares of land along the Constitution Avenue in the Central Business Area that is located at the centre of the city of Abuja. The project which commenced in March 2011 will have the phase one completed by September 2013. The ?156 billion development, the World Trade Centre towers is a multi-use complex that will comprise of luxury high rise office towers, luxury residence apartments, conference facilities, shopping malls and entertainment facilities.',
    location: 'Abuja, Nigeria',
    budget: '1000',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i0.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/World-Trade-Centre-Abuja.jpg'
  },
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'Lagos Light Rail',
    report: 'Lagos Light Rail is a light rail system, the first of its type in this region of Africa, is envisaged to eventually consist of seven lines (Red, Blue, Green, Yellow, Purple, Brown and Orange). The scheme is approximately 35-kilometre in length with an estimated ridership of a minimum of 500,000 passengers per day.',
    location: 'Lagos, Nigeria',
    budget: '30000',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i0.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/Lagos-Light-Rail.jpg'
  },
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'Lekki Free Trade Zone',
    report: 'Lekki Free Trade Zone (Lekki FTZ) covers a total area of about 30 square kilometres with 27 square kilometres for urban construction purposes, which would hold a total of 120,000 residents. Approximately 50 kilometres from the city centre of Lagos, the economic capital of Nigeria, Lekki FTZ borders Lekki Lagoon in the north and faces the Atlantic in the south.',
    location: 'Lagos, Nigeria',
    budget: '700',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/Lekki-Free-Trade-Zone.jpg'
  },
  {
    start: _.date.past().valueOf(),
    end: _.date.future().valueOf(),
    title: 'Abuja Gateway Airport',
    report: 'This stunning solar powered gateway will have the shape of the traditional Nigerian bow harp; the design connects the new Abuja Airport to the central area on the opposite side of the free-way and comes complete with green roofs, giant solar canopy and bricks made from local laterite clay. Conceived by Ehrlich Architects, the design was recently crowned winner of an international competition to create a gateway to the capital city.',
    location: 'Abuja, Nigeria',
    budget: '371',
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar()
    ],
    completion: Math.floor(Math.random() * 101),
    status: Math.floor(Math.random() * 9999999) % 6,
    uri: 'https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/eko-atlantic-city-project.jpg'
  }
]