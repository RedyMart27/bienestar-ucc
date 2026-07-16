import BadgeRole from "./BadgeRole";

function WelcomeSection({ current }) {

  return (

    <div>

      <BadgeRole
        icon={current.icon}
        badge={current.badge}
        color={current.color}
      />

      <h1 className="mt-8 text-5xl font-bold text-gray-800">

        {current.title}

      </h1>

      <p className="mt-4 text-xl text-gray-500 leading-relaxed">

        {current.subtitle}

      </p>

    </div>

  );

}

export default WelcomeSection;