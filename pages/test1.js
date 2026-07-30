import React, { useState } from 'react';
import { GoCheckCircleFill, GoCalendar, GoStopwatch } from "react-icons/go";

export default function test1() {

    const [openTab, setOpenTab] = useState(null);


  const toggleTab = (tabIndex) => {
    
    setOpenTab(openTab === tabIndex ? null : tabIndex);
  };
  return (
    //main div
    <div className="min-h-screen w-full bg-black text-white flex">
      {/* left side */}
      <div className="w-1/2 p-16  ">
        <h1 className="text-3xl font-bold">Automate your path to production</h1>
        <p className="font-light text-gray-500 mt-5">
          Ship faster with secure, reliable CI/CD.
        </p>
        <button
          className="text-blue-300 hover:underline hover:text-blue-700 mt-6 "
          onClick={() => (location.href = "https://github.com/")}
        >
          Explore Github Action →
        </button>

        {/* <hr className="my-8 border-gray-700" /> */}

        {/* <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">
            Code instantly from anywhere
          </h2>
          <span className="text-purple-600 text-3xl">+</span>
        </div>

        <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">Keep momentum on the go</h2>
          <span className="text-purple-600 text-3xl">+</span>
        </div>
        <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">Shape your toolchain</h2>
          <span className="text-purple-600 text-3xl">+</span>
        </div> */}

        <div className="max-w-lg mt-8 ">
  
  {/* --- ACCORDION ITEM 1 --- */}
  <details name="github-features" className="group py-5 border-t border-[#30363d] cursor-pointer">
    <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
      <h2 className="text-xl font-medium text-[#c9d1d9] group-hover:text-white group-open:text-white transition-colors">
        Code instantly from anywhere
      </h2>
      {/* Plus icon (Jab band hoga tab dikhega) */}
      <span className="text-[#bc8cff] text-2xl font-light group-open:hidden">+</span>
      {/* Minus icon (Jab open hoga tab dikhega) */}
      <span className="text-[#bc8cff] text-2xl font-light hidden group-open:block">−</span>
    </summary>
    <p className="mt-3 text-[#8b949e] text-md leading-relaxed pr-8">
      GitHub Codespaces provides a complete, configurable dev environment on top of a powerful VM in minutes.
    </p>
  </details>

  {/* --- ACCORDION ITEM 2 --- */}
  <details name="github-features" className="group py-5 border-t border-[#30363d] cursor-pointer">
    <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
      <h2 className="text-xl font-medium text-[#c9d1d9] group-hover:text-white group-open:text-white transition-colors">
        Keep momentum on the go
      </h2>
      <span className="text-[#bc8cff] text-2xl font-light group-open:hidden">+</span>
      <span className="text-[#bc8cff] text-2xl font-light hidden group-open:block">−</span>
    </summary>
    <p className="mt-3 text-[#8b949e] text-md leading-relaxed pr-8">
      Review code, manage pull requests, and merge changes from anywhere with GitHub Mobile for iOS and Android.
    </p>
  </details>

  {/* --- ACCORDION ITEM 3 --- */}
  <details name="github-features" className="group py-5 border-t border-b border-[#30363d] cursor-pointer">
    <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
      <h2 className="text-xl font-medium text-[#c9d1d9] group-hover:text-white group-open:text-white transition-colors">
        Shape your toolchain
      </h2>
      <span className="text-[#bc8cff] text-2xl font-light group-open:hidden">+</span>
      <span className="text-[#bc8cff] text-2xl font-light hidden group-open:block">−</span>
    </summary>
    <p className="mt-3 text-[#8b949e] text-md leading-relaxed pr-8">
      Customize your workflows with GitHub Apps, Webhooks, and the GitHub API. Build exactly what your team needs.
    </p>
  </details>

</div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-sky-900 p-12 overflow-hidden ">
        <div className="ralative z-10 w-full max-w-2xl bg-[#0d1117] border border-[#5f4472] border-8 rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-4 text-[#8b949e] text-sm font-medium">
            <span>45,167 workflow runs</span>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-white">Event ▾</span>
              <span className="cursor-pointer hover:text-white">Status ▾</span>
              <span className="cursor-pointer hover:text-white">Branch ▾</span>
              <span className="cursor-pointer hover:text-white">Actor ▾</span>
            </div>
          </div>
          <hr className="my-8 w-full border-gray-700" />

          <div className="flex flex-col">
            {/* --- ITEM 1 --- */}
            <div className="py-4 flex justify-between items-start">
              <div className="flex gap-3">
                <GoCheckCircleFill className="size-4 text-[#238636] mt-1 shrink-o" />
                <div>
                  <h3 className="text-[#e6edf3] text-sm font-semibold">
                    Fix IE12 incompatibilities
                  </h3>
                  <p className="text-[#8b949e] text-xs mt-1">
                    Build, test and deploy #15078: pull request #239122
                    synchronize by mona
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-[#8b949e] text-xs min-w-max pl-4">
                <div className="flex items-center gap-1">
                  <GoCalendar className="w-3.5 h-3.5" /> <span>1 hour ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GoStopwatch className="w-3.5 h-3.5" /> <span>5m 40s</span>
                </div>
              </div>
            </div>
            {/* --- ITEM 2 --- */}
            <div className="py-4 flex justify-between items-start">
              <div className="flex gap-3">
                <GoCheckCircleFill className="size-4 text-[#238636] mt-1 shrink-o" />
                <div>
                  <h3 className="text-[#e6edf3] text-sm font-semibold">
                    Accessibility tests
                  </h3>
                  <p className="text-[#8b949e] text-xs mt-1">
                    Build, test and deploy #15078: pull request #239122 synchronize by mona
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-[#8b949e] text-xs min-w-max pl-4">
                <div className="flex items-center gap-1">
                  <GoCalendar className="w-3.5 h-3.5" /> <span>1 hour ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GoStopwatch className="w-3.5 h-3.5" /> <span>5m 40s</span>
                </div>
              </div>
            </div>
            {/* --- ITEM 3 --- */}
            <div className="py-4 flex justify-between items-start">
              <div className="flex gap-3">
                <GoCheckCircleFill className="size-4 text-[#238636] mt-1 shrink-o" />
                <div>
                  <h3 className="text-[#e6edf3] text-sm font-semibold">
                    Update changelog and release notes
                  </h3>
                  <p className="text-[#8b949e] text-xs mt-1">
                    Build, test and deploy #15078: pull request #239122 synchronize by mona
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-[#8b949e] text-xs min-w-max pl-4">
                <div className="flex items-center gap-1">
                  <GoCalendar className="w-3.5 h-3.5" /> <span>1 hour ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GoStopwatch className="w-3.5 h-3.5" /> <span>5m 40s</span>
                </div>
              </div>
            </div>
            {/* --- ITEM 4 --- */}
            <div className="py-4 flex justify-between items-start">
              <div className="flex gap-3">
                <GoCheckCircleFill className="size-4 text-[#238636] mt-1 shrink-o" />
                <div>
                  <h3 className="text-[#e6edf3] text-sm font-semibold">
                    Migrate to latest Storybook
                  </h3>
                  <p className="text-[#8b949e] text-xs mt-1">
                    Build, test and deploy #15078: pull request #239122
                    synchronize by mona
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-[#8b949e] text-xs min-w-max pl-4">
                <div className="flex items-center gap-1">
                  <GoCalendar className="w-3.5 h-3.5" /> <span>1 hour ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GoStopwatch className="w-3.5 h-3.5" /> <span>5m 40s</span>
                </div>
              </div>
            </div>
            {/* --- ITEM 5 --- */}
            <div className="py-4 flex justify-between items-start">
              <div className="flex gap-3">
                <GoCheckCircleFill className="size-4 text-[#238636] mt-1 shrink-o" />
                <div>
                  <h3 className="text-[#e6edf3] text-sm font-semibold">
                    Fix IE11 incompatibilities
                  </h3>
                  <p className="text-[#8b949e] text-xs mt-1">
                    Build, test and deploy #15078: pull request #239122
                    synchronize by mona
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-[#8b949e] text-xs min-w-max pl-4">
                <div className="flex items-center gap-1">
                  <GoCalendar className="w-3.5 h-3.5" /> <span>1 hour ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GoStopwatch className="w-3.5 h-3.5" /> <span>5m 40s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
