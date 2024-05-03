
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";


export default function Home() {
  return (
      <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
         subHeader={'Our Project'}
         mainHeader={'About us'} />
         <div className="text-gray-500 max-w-2xl mx-auto mt-4">
          <p>
          Our food ordering project aims to revolutionize the way people discover, order, and enjoy food from their favorite restaurants.
           With its intuitive interface, robust features, and seamless user experience, the platform seeks to become the go-to destination 
           for food enthusiasts and restaurant owners alike.
          </p>
         </div>
      </section>
      <section className="text-center my-16">
        <SectionHeader
         subHeader={'Do follow'}
         mainHeader={'Contact Us'}/>
         <div className="mt-8">
         <a className="text-4xl underline text-gray-500" href='Phone No. 9080041101'>+91 9080041101

         </a>
         
         </div>
      </section>
     
      </>
  );
}
