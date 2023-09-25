    // destructuring

    // const dummy = {
    //     ad: "ahmet",
    //     soyad: "demir"
    // }

    // const {
    //     ad,
    //     soyad
    // } = dummy

    // console.log('ad', ad)

    // const {data} = props

import Row from "./Row"

const List = () => {

    const users = [{
        firstName: "Mehmet",
        lastName: "Demir",
        age: 28
    },{
        firstName: "Elif",
        lastName: "Tekin",
        age: 32
    },{
        firstName: "Ahmet",
        lastName: "Demir",
        age: 43
    }]

    return (
        <>
        {
            users.map((user, index) => {

                return (
                    <Row key={index} data={user} />
                )
            })
        }
        </>
    )
}

export default List