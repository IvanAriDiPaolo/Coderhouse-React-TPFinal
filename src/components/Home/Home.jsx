import React from 'react';
import {StyledHome} from './HomeElementes';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <StyledHome>
            <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sit dolorum, ipsum cum quam quo fuga voluptatibus sapiente unde dolore vero? Quidem, maxime repudiandae. Nostrum earum molestiae quidem quae rem!
                Facilis, quia id praesentium, quo voluptatem, dolores hic nulla illum harum amet ea omnis culpa dignissimos reprehenderit fugit accusamus quisquam neque soluta? Cupiditate et eveniet, dolorum labore laborum provident tenetur.
                Molestiae voluptatibus autem, animi iure adipisci dolorem, quibusdam repudiandae quasi neque quidem repellat officia nulla itaque rerum incidunt ad ullam porro praesentium exercitationem. Harum fugit temporibus, asperiores praesentium eius beatae?
                Nulla, reprehenderit rerum? Sit accusamus possimus, eveniet, blanditiis doloremque libero reiciendis eos aliquam fugit perferendis inventore eaque hic pariatur quas commodi ab, corporis veniam sed quidem. Maxime necessitatibus distinctio assumenda.
                Cumque aliquid modi itaque expedita? Ullam, vero ratione ipsum quod quidem laborum. Nam rerum fugiat, error sint, vitae asperiores ea possimus labore soluta ipsam voluptas? Praesentium ut consequuntur autem at.
                Nam illo ut ipsa perferendis vero impedit atque repellat assumenda vitae eveniet sit quo accusantium molestiae obcaecati, nulla cum dolorem, sequi consequuntur quidem commodi facilis consequatur et. Vel, porro sunt.
            </h2>
            <Link to="/Catalogo/Todo">
                <button>Comenzar a comprar</button>
            </Link>
        </StyledHome>
    )
}
