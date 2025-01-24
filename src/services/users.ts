export const usersService = new class {
	getUser(id: number) {
		// just a testing logic
		if (id > 10) {
			return null
		}

		// get from cache or fetch it
		return this.fetchUser(id)
	}

	private fetchUser(id: number) {
		// fetch from DB
		return { id }
	}
}
