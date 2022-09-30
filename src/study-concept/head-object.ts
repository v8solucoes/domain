export class ReadObject {
  constructor() {
   /*  console.clear(); */
    console.log(
      this.start(
        {
          title: "prop5",
          description: "id",
          sub: "",
        },
        {
          prop1: "result 1",
          prop2: "result 2",
          prop3: "result 3",
          souObject: {
            prop4: "result 4",
            prop5: ["result 5",'teste'],
            prop6: "result 6"
          },
        }
      )
    );
  }
  start(
    colection: { title: string; sub: string; description: string },
    object: any
  ) {
    let result = {
      title: null,
      sub: null,
      description: null,
    } as any

    for (const key in object) {
      const element = object[key];
      
      if (Object.prototype.hasOwnProperty.call(object, key)) {

        if (typeof element !== "object") {
          console.log(key);
          colection.title == key ? (result.title = element) : "";
          colection.sub == key ? (result.sub = element) : "";
          colection.description == key ? (result.description = element) : "";
        } else {
          if (Array.isArray(element) == true) {
            colection.title == key ? (result.title = element) : "";
            colection.sub == key ? (result.sub= element) : "";
            colection.description == key ? (result.description = element) : "";
            console.log(result)
            return result
          } else {
           /*  colection.title == key ? (result.title = this.start(colection, element)) : "";
            colection.sub == key ? (result.sub= this.start(colection, element)) : "";
            colection.description == key ? (result.description = this.start(colection, element)) : ""; */
            result.title = this.start(colection, element);
          }
        }
        /*      Array.isArray(object) */
      }
    }

    return result;
  }
}

const start = new ReadObject();
