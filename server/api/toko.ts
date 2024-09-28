
export default defineEventHandler(async (event) => {
    
    // bisa juga 
    // const {name} = getQuery(event)
    const name = getQuery(event).name

    return {
        message: `Data Pelanggan :  ${name}`
    }

  })