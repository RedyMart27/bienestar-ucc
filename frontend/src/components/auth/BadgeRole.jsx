function BadgeRole({ icon, badge, color }) {

  const colors = {

    cyan: "bg-cyan-100 text-cyan-700",

    lime: "bg-lime-100 text-lime-700",

    yellow: "bg-yellow-100 text-yellow-700",

  };

  return (

    <div
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold ${colors[color]}`}
    >

      {icon}

      <span>

        {badge}

      </span>

    </div>

  );

}

export default BadgeRole;