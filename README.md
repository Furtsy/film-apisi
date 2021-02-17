Film Apisi
---
Bu modül sayesinde imdb'den arama yapabilir,rastgele film/dizi/anime sözü bulablir veya ada görede bulablirsiniz,imdbde trendleri çekebilirsiniz,rastgele film/dizi önerisi yaptırabilirsiniz

[Site](https://www.filmler.fun)
---
```shell
npm install film-apisi
```
```javascript
const modül = require('film-apisi')

//imdb'den arama
async function ara() {
let sonuç = await modül.ara('breaking bad')
console.log(sonuç)
  }
ara()
/*/{
  ismi: 'Breaking Bad',
  'yönetmen': 'bulumadım',
  yazarlar: 'bulumadım',
  'yaratıcılar': 'bulumadım',
  'yaratıcı': 'Vince Gilligan',
  'yıldızlar': 'Bryan Cranston,Aaron Paul,Anna Gunn',
  'tür': 'Crime,Drama,Thriller',
  puan: '9.5',
  'yıl': '2008',
  'süre': '49min',
  sezon: '5',
  'bölüm': '62 episodes',
  benzerler: ' Game of Thrones, Chernobyl, Stranger Things, Peaky Blinders, Better Call Saul, El Camino: A Breaking Bad Movie, Friends, Sherlock, 
The Sopranos, The Walking Dead, Band of Brothers, Prison Break',
  poster: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50.jpg'     
}/*/


//imdb'den trendleri almak
async function trend() {
    let sonuç = await modül.trend()
    console.log(sonuç)
      }
      trend()
/*/
{
  trendler: 'Malcolm & Marie,The Dig,The Little Things,Old,News of the World,Greenland,Bliss,Seungriho,Judas and the Black Messiah,Promising Young Woman'
}
/*/


//rastgele film/dizi önerisi
async function rastgele() {
    let sonuç = await modül.rastgele('dizi') //değerler dizi veya film
    console.log(sonuç)
      }
      rastgele()
/*/
{
  ad: 'Body of Proof',
  'türü': 'Comedy,Crime,Drama,Mystery',
  'yıl': '2011',
  puan: '7.1',
  poster: 'https://m.media-amazon.com/images/M/MV5BMjAxNzkzOTkwM15BMl5BanBnXkFtZTcwNTMyNzkxNQ@@._V1_QL50.jpg'
}
/*/


//türe göre söz
async function söz_tür() {
    let sonuç = await modül.söz_tür('anime') //değerler film/anime/tv
    console.log(sonuç)
      }
      söz_tür()
/*/
{
  ad: 'Assassination classroom',
  'söz': 'Examined from another angle, your faults and weaknesses can be weapons',
  'söztr': 'Başka bir açıdan incelendiğinde, hatalarınız ve zayıflıklarınız silah olabilir'
}
/*/


//ada göre söz
async function söz_ad() {
    let sonuç = await modül.söz_ad('matrix')
    console.log(sonuç)
      }
      söz_ad()
/*/
{
   ad: 'matrix',
  'söz': 'We need guns. Lots of guns.',
  'söztr': 'Silahlara ihtiyacımız var. Bir sürü silah.'
}
/*/


//rastgele söz
async function söz_rastgele() {
    let sonuç = await modül.söz_rastgele()
    console.log(sonuç)
      }
      söz_rastgele()
/*/
{
  ad: '*batteries not included',
  'söz': "And to think I've been telling my friends it's so cool living with an artist. You never once asked to paint me nude!",
  'söztr': 'Ve arkadaşlarıma bir sanatçıyla yaşamanın çok havalı olduğunu söylediğimi düşünüyorum. Bir kez bile beni çıplak boyamak istemedin!'
}
/*/
```
