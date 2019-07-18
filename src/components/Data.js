import _ from 'faker';

export default function (length) {
  return Array(length).fill(null).map(i => ({
    start: _.date.past(),
    end: _.date.future(),
    title: _.company.catchPhraseNoun(),
    location: _.address.city(),
    budget: `${_.finance.amount()}`,
    contractors: [
      _.image.avatar(), _.image.avatar(), _.image.avatar() 
    ],
    report: _.lorem.sentences(5),
    completion: Math.floor(Math.random() * 101),
    uri: 'https://placeimg.com/182/324/any',
    status: Math.floor(Math.random() * 9999999) % 6
  }))
}