import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    // http://localhost:4200/
    {
        path:"",component:HomeComponent,title:"Home"
    },
    // http://localhost:4200/about
    {
        path:"about",component:AboutComponent,title:"about"
    },
        // http://localhost:4200/contact
    {
        path:"contact",component:ContactComponent,title:"contact"
    },
         // http://localhost:4200/login
    {
        path:"login",component:LoginComponent,title:"login"
    },
             // http://localhost:4200/register
    {
        path:"register",component:RegisterComponent,title:"register"
    },
                // http://localhost:4200/all-recipes

    {
        path:"all-recipes",component:RecipesComponent,title:"All recipes"
    },
                    // http://localhost:4200/save-recipes

    {
        path:"save-recipes",component:SavedRecipeComponent,title:"save recipe"
    },
    // http://localhost:4200/recipe/id/viee
    {
        path:"recipe/:id/view",component:ViewRecipeComponent,title:"view recipes"
    },
    {
        path:"**",component:PnfComponent,title:"page not found"
    }

];
