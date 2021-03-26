const Header = (props) => {

    const activeItems = props.items.filter(item =>item.active)
    const number = activeItems.length
return (

    <header>
        <h1 class='main'>Twoje zamówienie w CafeIntensa</h1>
        <h2 class='payment'>Wielkość zamówienia: {number}</h2>
        <h2 class='payment'>Do zapłaty: {number ? `${number *10}  złotych`: 'Koszyk jest pusty'} </h2>
    </header>
)
}