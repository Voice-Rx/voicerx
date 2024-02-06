const StatsCard = () => {
    return (
        <div className="mt-6 px-6 py-6 mx-auto lg:max-w-full lg:py-10 bg-white border border-gray-200 rounded-lg shadow">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
                <div>
                <div className="flex">
                    <h6 className="mr-2 text-4xl font-bold md:text-5xl text-purple-950">
                    86K
                    </h6>
                    <div className="flex items-center justify-center rounded-full bg-teal-400 w-7 h-7">
                    <svg
                        className="text-teal-900 w-7 h-7"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                    </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Patients</p>
                <p className="text-gray-700 text-sm">
                    Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
                    Amazon. They’re very famous and very high-maintenance effort.
                </p>
                </div>
                <div>
                <div className="flex">
                    <h6 className="mr-2 text-4xl font-bold md:text-5xl text-purple-950">
                    1.3K
                    </h6>
                    <div className="flex items-center justify-center rounded-full bg-teal-400 w-7 h-7">
                    <svg
                        className="text-teal-900 w-7 h-7"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                    </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">New Patients Last Week</p>
                <p className="text-gray-700 text-sm">
                    One day, after filming a scene deep in the rainforest, the three
                    actors and their agents decide to head back to home base by foot.
                </p>
                </div>
                <div>
                <div className="flex">
                    <h6 className="mr-2 text-4xl font-bold md:text-5xl text-purple-950">
                    52M
                    </h6>
                    <div className="flex items-center justify-center rounded-full bg-teal-400 w-7 h-7">
                    <svg
                        className="text-teal-900 w-7 h-7"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                    </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Prescriptions Generated</p>
                <p className="text-gray-700 text-sm">
                    Suddenly, they come to a large river. On the riverbank, they find a
                    small rowboat, but it’s only big enough to hold two of them at one
                    time.
                </p>
                </div>
            </div>
        </div>
    )
}

export default StatsCard;