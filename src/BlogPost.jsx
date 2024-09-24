import React from 'react';
import one from './assets/1.webp';
import two from './assets/2.webp';
import three from './assets/3.webp';
import four from './assets/4.webp';
import five from './assets/5.webp';

const BlogPost = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-16 bg-gray-50">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-800 leading-tight">
          Meshy AI: Revolutionizing 3D Creation with AI-Powered Tools
        </h1>
        <p className="text-lg font-semibold text-gray-600 mt-4">
          Why Upgrading to Paid Unlocks Your Full Potential
        </p>
      </header>

      {/* Introduction Section */}
      <section className="space-y-6">
        <p className="text-xl leading-relaxed text-gray-700">
          Are you tired of spending days or even weeks on creating high-quality 3D models? With <span className="font-bold text-purple-700">Meshy AI</span>, your workflow just got a whole lot easier. Whether you're a game developer, designer, or hobbyist, Meshy AI enables you to generate stunning 3D assets in minutes using simple text or images. The best part? You don't need to master complex tools like Maya or Blender!
        </p>

        <p className="text-xl leading-relaxed text-gray-700">
          While the <span className="font-bold text-purple-700">free version</span> is perfect for exploring the platform, the real magic happens when you upgrade to the <span className="font-bold text-purple-700">paid version</span>. The advanced features unlock unparalleled creative freedom and allow you to turn your vision into reality. Start today by using this link: 
          <a href="https://app.meshy.ai?via=royofist" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-800"> Upgrade to Meshy AI</a>.
        </p>
      </section>

      {/* Image 1 */}
      <div className="my-8">
        <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={one} alt="Vibrant 3D model created with Meshy AI" />
        <p className="text-center mt-2 text-gray-500 italic">A stunning 3D model created with Meshy AI's advanced features.</p>
      </div>

      {/* Key Differences Section */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-purple-800 text-center">Key Features and Why You Should Upgrade</h2>
        
        <p className="text-lg leading-relaxed text-gray-700">
          The <span className="font-semibold text-purple-700">free version</span> of Meshy AI is great for testing the waters, but if you’re serious about 3D creation, the <span className="font-semibold text-purple-700">paid version</span> provides the advanced tools and flexibility you need to create professional-grade models. Let’s take a look at what you get with an upgrade.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-purple-800">1. Unlimited 3D Model Creation</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Free Version</span>: Limited to a small number of models each month.<br />
              <span className="font-semibold">Paid Version</span>: The paid version offers <span className="font-bold text-purple-700">unlimited model generation</span>, perfect for game developers and content creators who need to produce 3D assets consistently.
            </p>
          </div>

          {/* Image 2 */}
          <div className="my-8">
            <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={two} alt="Free vs Paid 3D model comparison" />
            <p className="text-center mt-2 text-gray-500 italic">A comparison of models generated with free and paid versions of Meshy AI.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-800">2. High-Quality Textures and PBR Maps</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Free Version</span>: Basic textures for your models.<br />
              <span className="font-semibold">Paid Version</span>: Generate high-resolution textures with <span className="font-bold text-purple-700">PBR (Physically Based Rendering) maps</span> like base color, metallic, roughness, and normal maps—perfect for creating realistic 3D assets.
            </p>
          </div>

          {/* Image 3 */}
          <div className="my-8">
            <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={three} alt="AI-generated texture comparison" />
            <p className="text-center mt-2 text-gray-500 italic">A demonstration of high-quality textures and PBR maps generated in the paid version.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-800">3. Versatile Art Styles</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Free Version</span>: Limited to basic styles.<br />
              <span className="font-semibold">Paid Version</span>: The paid version unlocks a variety of art styles such as <span className="font-bold text-purple-700">realistic, cartoon, anime, voxel</span>, and more, giving you creative control over your project’s aesthetics.
            </p>
          </div>

          {/* Image 4 */}
          <div className="my-8">
            <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={four} alt="AI-generated art style variations" />
            <p className="text-center mt-2 text-gray-500 italic">Different art styles generated using Meshy AI's versatile paid features.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-800">4. Commercial Use Rights</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Free Version</span>: Personal use only.<br />
              <span className="font-semibold">Paid Version</span>: Get <span className="font-bold text-purple-700">full commercial rights</span> to use your 3D models in games, AR/VR experiences, and even product designs for professional purposes.
            </p>
          </div>

          {/* Image 5 */}
          <div className="my-8">
            <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={five} alt="Commercial use example with 3D models" />
            <p className="text-center mt-2 text-gray-500 italic">3D models used in product design, game development, and AR experiences.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-purple-800">Unlock the Full Potential with the Paid Version</h2>
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          Meshy AI offers limitless possibilities, but to truly harness the platform’s power, upgrading to the <span className="font-bold text-purple-700">paid version</span> is essential. You’ll get access to all the advanced tools, high-quality textures, and versatile art styles, plus full commercial rights to take your 3D creations to the next level.
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li><span className="font-bold text-purple-700">Unlimited 3D Model Creation</span></li>
          <li><span className="font-bold text-purple-700">High-Resolution Textures and PBR Maps</span></li>
          <li><span className="font-bold text-purple-700">Versatile Art Styles</span></li>
          <li><span className="font-bold text-purple-700">Full Commercial Use Rights</span></li>
        </ul>

        <p className="text-lg text-center text-gray-700 leading-relaxed">
          Ready to take your 3D modeling experience to the next level? By upgrading to the paid version of Meshy AI, you’ll have access to premium tools that give you a competitive edge. Whether you're working on professional projects, game development, or creative personal work, Meshy AI’s paid version gives you unlimited access to create stunning, textured           3D models with commercial rights.
        </p>

        <div className="text-center">
          <a
            href="https://app.meshy.ai?via=royofist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-bold text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
          >
            Upgrade to Meshy AI Now
          </a>
        </div>

        {/* Final CTA Image */}
        <div className="my-8">
          <img className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-lg" src={five} alt="Unlock limitless creativity with Meshy AI" />
          <p className="text-center mt-2 text-gray-500 italic">Unlock limitless creativity with Meshy AI's advanced tools.</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

