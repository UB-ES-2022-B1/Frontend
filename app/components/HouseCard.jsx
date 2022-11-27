import { useLoaderData } from "@remix-run/react";
import example2 from '~/assets/example2.webp'
import Slider from "~/components/slider"

export const houseLoader = (id) => 
{
    return (
        {
            images: [
                "https://www.w3schools.com/howto/img_nature_wide.jpg",
                example2
            ],
            location: 'Castelldefels, España',
            sublocation: 'Playa de Castelldefels',
            dates:'12-17 oct',
            price:'285€'
        }
    )
    // return json(
    //   await fakeDb.project.findMany(
    //     {
    //     where: {
    //       userId: params.userId,
    //       projectId: params.projectId,
    //     },
    //   })
    // );
  };

export default function(params)
{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    let house = houseLoader(params.id)
    return (
    <div className="housecard">
        <div>
            <Slider
                width={'250px'}
                height={'250px'}
                images={house.images}
            />
        </div>
        <div>
            <div><b>{house.location}</b></div>
            <div>{house.sublocation}</div>
            <div>{house.dates}</div>
            <div><b>{house.price}</b> noche</div>
        </div>
    </div>
    )
}