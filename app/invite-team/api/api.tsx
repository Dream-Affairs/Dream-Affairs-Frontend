export async function fetchAcceptedInvites(organizationId: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/invites/accepted/${organizationId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch accepted invites. Status: ${response.status}`);
    }

    const result = await response.json();
    const { message, data } = result;

    if (message === 'Accepted invites fetched successfully' && Array.isArray(data)) {
      console.log('Accepted Invites Response:', data);
      return data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error: any) {
    console.error('Error fetching accepted invites:', error.message);
    throw error;
  }
}

// to fetch roles
export async function fetchRoles(organizationId: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/roles/${organizationId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch roles. Status: ${response.status}`);
    }

    const result = await response.json();
    const { message, data } = result;

    if (message === 'Roles retrieved successfully' && Array.isArray(data)) {
      console.log('Roles Response:', data); // Log the entire data array
      return data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error: any) {
    console.error('Error fetching roles:', error.message);
    throw error;
  }
}

export async function fetchSuspendedInvites(organizationId: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/invites/suspended/${organizationId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch suspended invites. Status: ${response.status}`);
    }

    const result = await response.json();
    const { message, data } = result;

    if (message === 'Suspended invites fetched successfully' && Array.isArray(data)) {
      console.log('Suspended Invites Response:', data);
      return data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error: any) {
    console.error('Error fetching suspended invites:', error.message);
    throw error;
  }
}

// api.js

export async function suspendUser(organizationId: string, memberId: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/invites/suspend/${organizationId}/${memberId}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to suspend user. Status: ${response.status}`);
    }

    const result = await response.json();
    // handle the response if needed

    return result;
  } catch (error: any) {
    console.error('Error suspending user:', error.message);
    throw error;
  }
}
