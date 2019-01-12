import React from "react";

// export default class FetchRandomUser extends React.Component {
//     state = {
//         loading: true,
//         person: null
//     };

//     async componentDidMount() {
//         const url ="https://api.randomuser.me";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ person: data.results[0] , loading: false });
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading || !this.state.person ? (
//                     <div>loading...</div>
//                 ) : (
//                     <div>
//                         <div>{this.state.person.name.title}</div>
//                         <div>{this.state.person.name.first}</div>
//                         <div>{this.state.person.name.last}</div>
//                         <img src={this.state.person.picture.large} />
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default class FetchRandomUser extends React.Component {
//     state = {
//         loading: true,
//         person: null
//     };

//     async componentDidMount() {
//         const url ="https://api.randomuser.me";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ person: data.results[0] , loading: false });
//         // this.setState({ person: null, loading: false });
//     }

//     render() {
//         if(this.state.loading) {
//             return <div>loading...</div>;
//         }

//         if(!this.state.person ) {
//             return <div>didn't get a person</div>;
//         }
//         return (
//             <div>
//                 <div>
//                     <div>{this.state.person.name.title}</div>
//                     <div>{this.state.person.name.first}</div>
//                     <div>{this.state.person.name.last}</div>
//                     <img src={this.state.person.picture.large} alt='random_user_avatar' />
//                 </div>
//             </div>
//         );
//     }
// }

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url ="https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0] , loading: false });
        // this.setState({ person: null, loading: false });
    }

    render() {
        if(this.state.loading) {
            return <div>loading...</div>;
        }

        if(!this.state.people.length) {
            return <div>didn't get a person</div>;
        }
// Forloop
    const peopleJsx = []; 
    
    this.state.people.forEach((person) => {
        peopleJsx.push(
            <div key={person.login.uuid}>
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large} alt='random_user_avatar' />
            </div>
        );
    });

// Map
        // const peopleJsx = this.state.people.map(person => (
        //     <div key={person.login.uuid}>
        //         <div>{person.name.title}</div>
        //         <div>{person.name.first}</div>
        //         <div>{person.name.last}</div>
        //         <img src={person.picture.large} alt='random_user_avatar' />
        //     </div>
        // ));

        return <div>{peopleJsx}</div>;
        
    }
}