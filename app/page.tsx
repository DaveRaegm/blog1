import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Why PondsInfo
      </h1>
      <p className="mb-4">
        {`PondsInfo is dedicated to sharing knowledge and resources about pond creation, maintenance, and ecology. The blog aims to inspire and educate pond enthusiasts, providing practical tips, design ideas, and fostering a community passionate about aquatic environments. The blog serves as a comprehensive guide for anyone interested in enhancing their outdoor spaces with ponds.`}
      </p>
      <p className="mb-4">
        <strong>Key Features of PondsInfo:</strong>
      </p>
      <ul className="mb-4">
        <li><strong>Educational Content:</strong> Articles cover various aspects of pond care, including water quality management, plant selection, and fish stocking.</li>
        <li><strong>Design Inspiration:</strong> The blog showcases different pond designs, helping readers visualize how they can incorporate ponds into their landscapes.</li>
        <li><strong>Community Engagement:</strong> PondsInfo encourages interaction among readers, allowing them to share their experiences, ask questions, and connect with fellow pond lovers.</li>
        <li><strong>Expert Advice:</strong> The blog often features insights from experts in pond management and ecology, ensuring that readers receive reliable and up-to-date information.</li>
        <li><strong>Resource Library:</strong> PondsInfo may offer downloadable resources, such as checklists and guides, to assist readers in their pond projects.</li>
      </ul>
      <p>
        {`By focusing on these elements, PondsInfo aims to be the go-to resource for anyone looking to create or maintain a beautiful and healthy pond environment.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
