
export default defineEventHandler(async (event) => {
    
    // bisa juga 
    // const {name} = getQuery(event)
    const name = getQuery(event).name

    return {
        data : {
            name: 'Priana', 
            address: 'Boggor',
            phone_number : '08665544444'
        },
        message: `Data Pelanggan :  ${name}`
    }

  })