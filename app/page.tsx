import { Post } from './lib/interface';
import {client} from './lib/sanity'

async function getData() {
  const query = '*[_type == post]'
  const data = await client.fetch(query);
}

const IndexPage = async () => {
  const data = (await getData()) as Post[];
  return (
    <div>page</div>
  )
}

export default IndexPage