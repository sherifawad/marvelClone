module.exports = {
	displayName: process.env.NODE_ENV !== "production",
    evaluate: true,
    classNameSlug: (hash, title) => `${hash}_${title}`,
};
