class App extends React.Component {
    state = { 
        items: [
            { id:1, name: "Herbata Zielona", active: true },
            { id:2, name: "Herbata Czarna", active: false },
            { id:3, name: "Espresso", active: false },
            { id:4, name: "Cappuccino", active: false },
            { id:5, name: "Kawa biała", active: false },
            { id:6, name: "Mleko", active: true },

        ],

    }

    handleChangeStatus = (id) => {
        console.log(id);
    

    const items = this.state.items.map(item => {
        if(id === item.id) {
        item.active = !item.active
}
    return item
    })

    this.setState({
        items: items 
    })
    }
    render() { 
        return ( 
        <React.Fragment>
            <Header items={this.state.items} />
            <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
        </React.Fragment>
         );
    }
}
 
