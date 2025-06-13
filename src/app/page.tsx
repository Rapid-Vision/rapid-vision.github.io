import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Eye,
  Zap,
  Code,
  Database,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "nextra/icons";
import Image from "next/image";

export const metadata = {
  title: "Rapid Vision",
};

const codeExample = `import rv
from random import choice

def render_scene():
    rv.set_resolution([640, 640])
    rv.set_mode("classification")
    rv.set_classes(["sphere", "cube"])

    current_class = choice(["sphere", "cube"])
    rv.set_class(current_class)

    if current_class == "sphere":
        obj = rv.add_sphere()
    else:
        obj = rv.add_cube()

    obj.set_rotation(rv.random_rotation())`;

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
    <Link href="/docs/tutorial">
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3 text-white"
      >
        Get Started Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </Link>
    <Link href="https://github.com/Rapid-Vision/rv">
      <Button
        size="lg"
        variant="secondary"
        className="border-slate-700 text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-950 text-lg px-8 py-3"
      >
        <GitHubIcon className="w-5 h-5 mr-2" />
        View Source
      </Button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-3 bg-yellow-50 text-yellow-700 border-yellow-200">
            {/* Open Source • Blender Powered */}
            Pre-Alpha
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Rapid{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Synthetic
            </span>
            <br />
            Dataset Creation
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create high-quality synthetic datasets with a few lines of code.
            Instantly see results and generate production-ready labeled
            datasets.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Code Example */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              See It In Action
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    script.py
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto bg-">
                  <code>{codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Single tool to preview and run
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              RV simplifies synthetic dataset creation with just two core
              commands that handle everything from preview to production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Preview Command */}
            <Card className="bg-white border-slate-200 shadow-lg hover:bg-slate-100 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900 text-xl">
                      Interactive Preview
                    </CardTitle>
                    <code className="text-sm text-blue-500 bg-slate-100 px-2 py-1 rounded">
                      rv preview script.py
                    </code>
                  </div>
                </div>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Open a live Blender window that automatically updates as you
                  modify your script. See your scene changes in real-time with
                  immediate visual feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Real-time scene updates
                  </li>
                  <li className="flex items-center">
                    <Eye className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Interactive 3D visualization
                  </li>
                  <li className="flex items-center">
                    <Code className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Instant feedback on code changes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Render Command */}
            <Card className="bg-white border-slate-200 shadow-lg hover:bg-slate-100 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900 text-xl">
                      Production Rendering
                    </CardTitle>
                    <code className="text-sm text-indigo-500 bg-slate-100 px-2 py-1 rounded">
                      rv render script.py -c 1000
                    </code>
                  </div>
                </div>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Generate thousands of randomly varied, fully labeled images
                  ready for machine learning. Complete with bounding boxes,
                  classes, and masks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <Database className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Batch dataset generation
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Automatic labeling (boxes, classes, masks)
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Production-ready output
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Synthetic Data
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on Blender&apos;s powerful 3D engine with a simple command
              interface designed for data scientists and ML engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <Code className="w-8 h-8 text-blue-500 mb-4" />
                <CardTitle className="text-slate-900">Simple API</CardTitle>
                <CardDescription className="text-slate-600">
                  Create meshes, set up cameras, and distribute objects with
                  intuitive Python commands.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <Eye className="w-8 h-8 text-green-500 mb-4" />
                <CardTitle className="text-slate-900">
                  Visual Feedback
                </CardTitle>
                <CardDescription className="text-slate-600">
                  See your changes instantly in an interactive 3D window that
                  updates as you code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <Database className="w-8 h-8 text-blue-500 mb-4" />
                <CardTitle className="text-slate-900">Smart Labeling</CardTitle>
                <CardDescription className="text-slate-600">
                  Automatically generate bounding boxes, class labels, and
                  segmentation masks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <CardTitle className="text-slate-900">
                  Raytracing incuded
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Leverage the full power of Blender&apos;s rendering engine and
                  3D capabilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <GitHubIcon className="w-8 h-8 text-slate-500 mb-4" />
                <CardTitle className="text-slate-900">Open Source</CardTitle>
                <CardDescription className="text-slate-600">
                  Free, open-source tool with an active community and extensible
                  architecture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <Star className="w-8 h-8 text-pink-500 mb-4" />
                <CardTitle className="text-slate-900">
                  Production Ready
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Generate thousands of high-quality images suitable for
                  training ML models.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Sponsors
            </h2>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            <Link href="https://fasie.ru">
              <div className="bg-white p-6 rounded-lg border-slate-200 flex items-center justify-center">
                <Image
                  src="fasie.png"
                  alt="Фонд содействия инновациям"
                  width={214}
                  height={135}
                ></Image>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/docs/tutorial">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-slate-600 hover:to-gray-600 text-lg px-8 py-3 text-white"
              >
                Become our sponsor
                <Wallet className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Create Your First Dataset?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Try Rapid Vision out to generate high-quality randomized labeled
            datasets for your next computer vision project.
          </p>
        </div>
        <CTAButtons />
      </section>
    </div>
  );
}
