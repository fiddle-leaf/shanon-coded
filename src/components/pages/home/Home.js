import Photo from "../../entries/photo/Photo";
import Text from "../../entries/text/Text";
import Layout from "../../layout/Layout";

export default function Home(props) {
  return (
    <Layout>
      <article>
        <Photo
          title="Photo"
          date="07-18-1997"
          caption="Fusce et molestie nibh. Aenean at eros ultrices, dignissim tellus hendrerit, tristique nulla."
          source="https://images.unsplash.com/photo-1540777904071-116f612b3bb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="yellow common butterly on a flower"
        />
        <Text
          title="Ut tincidunt diam nec sem ultrices pellentesque."
          body="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur imperdiet vitae libero non accumsan. Nulla vel diam sed nibh luctus ullamcorper. Curabitur vel enim eget eros tincidunt tempor. Sed ac cursus ex. Aenean lacinia vitae sapien ac fermentum. Integer non mi massa."
          date="02-04-1996"
        />
      </article>
    </Layout>
  );
}
