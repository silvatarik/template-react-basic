import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';


//El RouteComponentProps se utiliza en este caso sobre todo
//para definir en todo caso las proptypes a través de interfaces
//por ejemplo lo posible parametros que pasemos

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        let number = props.match.params.number;

        if(number) setMessage(`The number is ${number}`);
        else setMessage(`No number provided`);

    }, [props])

    return (
        <div>
            <p>About Page - {message}</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default withRouter(AboutPage);