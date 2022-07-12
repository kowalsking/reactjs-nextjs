import { useEffect, useState } from 'react';
import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    console.log('counter', counter)
    return function cleanup() {
      console.log('unmounting)')
    }
  })

  useEffect(() => {
    console.log('mounted')
    return function cleanup() {
      console.log('unmounting)')
    }
  }, [])

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(x => x+1)}>Button!</Button>
      <Button appearance="ghost">Button!</Button>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio, error reprehenderit ipsa mollitia officiis natus fuga eius fugit perspiciatis itaque deleniti iure earum eligendi blanditiis molestiae quas recusandae reiciendis!
      Earum eum incidunt eius et doloremque dolor autem unde rem, esse, nesciunt quas dolores aliquid dolorum adipisci totam blanditiis nisi minima assumenda laudantium aspernatur neque minus atque quibusdam ab? Exercitationem.
      Tempora, voluptatum veniam voluptates deserunt fugiat eligendi molestiae libero doloremque placeat! Qui reiciendis quos quia laborum praesentium ratione id corporis. Pariatur consequuntur consectetur quis vitae excepturi ullam alias voluptatem in.
      Enim aliquid soluta atque maxime obcaecati numquam aut, optio laborum perspiciatis mollitia fugiat quam provident in odit. Nam architecto temporibus a officia itaque! Accusamus soluta repudiandae est exercitationem quis asperiores?
      Omnis deleniti culpa consequuntur, provident dolorum nisi ipsum quibusdam perferendis facilis velit rem neque quo. Saepe cumque molestiae, explicabo illo odio rerum, sed adipisci est porro optio iusto quia ipsa!
      Unde laudantium nam fuga neque sint esse in. Atque ut hic distinctio dolor dolorum error quia aperiam eos. Velit cupiditate est ipsam veniam, iusto excepturi explicabo beatae laboriosam aspernatur perferendis.
      Alias, consequatur aperiam. Iusto odio cupiditate, veniam ipsa excepturi dolores id sapiente distinctio, saepe maxime incidunt tempora quibusdam voluptatibus in nisi exercitationem tempore? Cumque cupiditate unde praesentium, obcaecati quisquam perspiciatis.
      Laboriosam ex debitis harum impedit beatae odio, sed, asperiores accusantium sequi vitae aperiam voluptas corporis tempore deleniti reiciendis expedita dolorum tenetur officia repellendus exercitationem adipisci fugiat magnam consequatur? Saepe, excepturi.
      Quas necessitatibus eius recusandae animi quasi. Aut totam sit, quis veritatis ipsa amet dolorum illum explicabo quae labore esse minima voluptate ab? Fuga assumenda quo ipsam incidunt error, perspiciatis voluptate.
      Voluptatum sequi culpa quaerat porro consectetur aliquam sed, facilis rem saepe ea in nulla numquam eius maxime esse fuga maiores eaque laborum neque minima iure eos alias modi consequatur? Dolorum?
      Modi quae eveniet obcaecati explicabo hic impedit inventore ratione! Rerum perspiciatis dolorum iste tempora amet fugiat, possimus quis, quaerat magni dolores eum obcaecati, ratione aperiam! Inventore tempore nam nihil atque.
      Vero necessitatibus tenetur laboriosam quae maiores ratione voluptatibus eaque nemo reprehenderit aspernatur maxime pariatur quo repudiandae eligendi, sit iusto incidunt rem quasi impedit iste fuga dignissimos omnis hic? Et, rem.
      Facere minus ratione unde, dolore dignissimos fugiat aperiam eveniet omnis fugit consequuntur illo quidem quia culpa earum temporibus dolorum reiciendis, delectus, accusantium a. Nemo aut, reiciendis itaque quidem commodi quos.
      Adipisci quia quisquam, quas ullam totam ipsa explicabo et fuga deserunt asperiores eaque maxime cum modi molestias veniam aliquid soluta optio repellendus minima quasi magni sed illo eos. Debitis, optio.
      Iste hic perspiciatis mollitia rerum accusantium? Perspiciatis perferendis praesentium aspernatur omnis nam corrupti error! Qui, enim dicta reiciendis explicabo perferendis vel non fugiat neque debitis architecto? Id, fugiat. Quaerat, dicta.
      Alias temporibus ducimus corrupti recusandae, eveniet culpa aliquid vel dignissimos voluptatum id, sequi quisquam, illo exercitationem suscipit deserunt animi sit ipsum corporis vero reiciendis omnis? Maxime quam sunt accusamus quasi.
      Alias tempora corrupti ut architecto fuga voluptatibus officia consectetur natus doloremque accusantium, aperiam veritatis nobis, repellat minus non, eum at. Similique dolorem necessitatibus pariatur, molestias fuga aut alias fugit suscipit.
      Explicabo, nostrum. Voluptas, ea. Eos, ducimus? Provident minus architecto numquam a consectetur maiores voluptates nulla dolores ut nihil, enim odio et ipsum corrupti! Ipsa atque, natus rem corporis aliquam earum.
      Voluptate, dolore consequatur in ducimus totam sapiente iste veniam quidem nam, corporis laborum reprehenderit. Enim molestias nobis facilis! Vel pariatur optio suscipit accusantium assumenda culpa placeat, distinctio magni obcaecati in!
      Veniam libero, nobis officia possimus necessitatibus esse labore at aspernatur, debitis molestias non ut! Doloremque voluptatibus reprehenderit error in dolorum at dignissimos et autem, minima provident dicta veniam iusto minus?</P>
      <Tag size="s">small</Tag>
      <Tag size="m" color="red">small</Tag>
      <Tag size="s" color="primary">small</Tag>
    </>
  );
}
