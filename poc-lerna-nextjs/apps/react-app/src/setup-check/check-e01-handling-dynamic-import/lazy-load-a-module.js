import lazyContent from './content-for-lazy-module.js';

const isBrowser = !(navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")); // https://github.com/jsdom/jsdom/issues/1537

const p1 = new Promise((rs, rj) => {
  import('./module-to-lazy-load').then(({default:content})=>{
    isBrowser && console.log('Dyanmic loading with promise is working :', content===lazyContent);
    rs(content);
  }).catch(err=>rj(err));
});


const p2 = new Promise( async (rs, rj) => {
  isBrowser && console.log('...loading lazy module');
  try {
    const {default:content} = await import('./module-to-lazy-load');
    isBrowser && console.log('Dynamic loading with async is working :', content===lazyContent);
    rs(content);
  } catch (err) {
    rj(err);
  }
})

export {p1, p2};


