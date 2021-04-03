const REQUEST_URL = 'https://opentdb.com/api.php?amount=8&category=11&difficulty=easy&type=multiple';

export const fetchQuestion = async () => {
  return fetch(REQUEST_URL)
  .then((response) =>  response.json() )
  .then((data) => data['results'])
  .catch(function(){
    console.log('Error');
  });
}