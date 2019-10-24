let Item;

export default class Template {
  itemlist(items) {
    return items.reduce((a, item) => console.log(a, item))
  }
}