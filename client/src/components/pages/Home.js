import React, { useContext, useEffect } from 'react'
import Recipes from '../recipes/Recipes';
import RecipeForm from '../recipes/RecipeForm';
// import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="grid-2">
            <div>
                <RecipeForm />
            </div>
            <div>
                {/* <ContactFilter /> */}
                <Recipes />
            </div>
        </div>
    )
}

export default Home;
