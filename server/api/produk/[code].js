
export default defineEventHandler(async (event) => {
    
    // bisa juga 
    // const {name} = getQuery(event)
    // const name = getQuery(event).name
    const {id} = event.context.params;

    return {
        produk2 : "Test"
    }

  })